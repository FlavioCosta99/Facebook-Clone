export default function Footer() {
  const lang_options = [
    'Português (Portugal)',
    'Français (France)',
    'Español',
    'Русский',
    'Română',
    'Deutsch',
    'Italiano',
    'العربية',
    'हिन्दी',
    '中文(简体)',
  ];
  const other_options = [
    'Sign Up',
    'Log In',
    'Messenger',
    'Facebook Lite',
    'Watch',
    'Places',
    'Games',
    'Marketplace',
    'Facebook Pay',
    'Jobs',
    'Oculus',
    'Portal',
    'Instagram',
    'Local',
    'Fundraisers',
    'Services',
    'Voting Information Center',
    'Businesses',
    'About',
    'Create Ad',
    'Create Page',
    'Developers',
    'Careers',
    'Privacy',
    'Cookies',
    'Ad Choices',
    'Terms',
    'Help',
  ];

  return (
    <footer className="absolute w-full bottom-0 bg-white py-5">
      <div className="w-4/5 m-auto  text-gray-400 pt-3">
        <ul className="flex flex-wrap items-center">
          <li className="mr-4 text-gray-100" style={{ fontSize: '12px' }}>
            English (US)
          </li>
          {lang_options.map((op: string) => (
            <li
              className="mr-4 text-gray-100 cursor-pointer"
              style={{ fontSize: '12px' }}
            >
              {op}
            </li>
          ))}
          <a
            href="#"
            style={{
              backgroundColor: '#f5f6f7',
              borderColor: '#ccd0d5',
              height: '18px',
              lineHeight: '18px',
            }}
            className="btn_other_languages"
          >
            <i className="more_languages_btn" />
          </a>
        </ul>
        <div className="divider" />
        <div>
          <ul className="flex flex-wrap">
            {other_options.map((op: string) => (
              <li className="mr-4 text-gray-100" style={{ fontSize: '12px' }}>
                {op}
              </li>
            ))}
          </ul>
        </div>
        <p className="my-4 text-gray-100" style={{ fontSize: '12px' }}>
          Facebook
        </p>
      </div>
    </footer>
  );
}
