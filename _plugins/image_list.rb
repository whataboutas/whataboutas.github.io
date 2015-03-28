module Jekyll
  class ImageList < Liquid::Tag
    @path = nil

    @imageclass = nil
	@linkclass = nil
	@gallery_name = nil

    def initialize(tag_name, text, tokens)
      super

      # The path we're getting images from (a dir inside your jekyll dir)
      @path = text.split(/\s+/)[0].strip

      # Defaults
      @imageclass = 'images'
	  @linkclass = 'imageslink'
	  @gallery_name = 'Gallery'

      # Parse Options
      if text =~ /--imageclass=(\S+)/i
        @imageclass = text.match(/--imageclass=(\S+)/i)[1]
      end
	  if text =~ /--linkclass=(\S+)/i
        @linkclass = text.match(/--linkclass=(\S+)/i)[1]
      end
	  if text =~ /--gallery-name=(\S+)/i
        @gallery_name = text.match(/--gallery-name=(\S+)/i)[1]
      end

    end

    def render(context)
      # Get the full path to the dir
      # Include a filter for JPG and PNG images
      full_path = File.join(context.registers[:site].config['source'], @path, "*.{jpg,jpeg,JPG,JPEG,png,PNG}")
      # Start building tags
      source = "<div>\n"
      # Glob the path and create tags for all images
      Dir.glob(full_path).each do |image|
	    file = Pathname.new(image).basename
        src = File.join('/', @path, file)
		thumb = File.join('/', @path, 'thumbs', file)
	  source += "<a href='#{src}' class='#{@linkclass}' data-lightbox='#{@gallery_name}' title=""\n><img class='#{@imageclass}' src='#{thumb}' /></a>\n"
      end
      # Close it up 
      source += "</div>\n"
      # source
    end
  end
end

Liquid::Template.register_tag('image_list', Jekyll::ImageList)
