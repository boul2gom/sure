FastGettext.add_text_domain 'app', path: 'i18n/ui', type: :po
FastGettext.default_available_locales = ['en', 'fr']
FastGettext.default_text_domain = 'app'

# Configure gettext_i18n_rails
Object.send(:include, FastGettext::Translation)