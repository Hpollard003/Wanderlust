module ImageConcern
    extend ActiveSupport::Concern
    include Rails.application.routes.url_helpers

    included do
        Rails.application.routes.default_url_options[:host] = 'http://localhost:3000'
    end
end