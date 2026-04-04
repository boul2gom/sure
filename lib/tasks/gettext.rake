namespace :gettext do
  task :setup => :environment do
    FastGettext.add_text_domain 'app', path: 'i18n/ui', type: :po
    FastGettext.default_text_domain = 'app'
  end
end