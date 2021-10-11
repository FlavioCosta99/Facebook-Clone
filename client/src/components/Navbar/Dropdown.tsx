import { useState } from 'react';

export default function DropdownComp({
  children,
  buttonText,
  classNameButton,
  styleButton,
  classNameDropdown,
  styleDropdown,
}: {
  children: any;
  buttonText: any;
  classNameButton?: string;
  styleButton?: any;
  classNameDropdown: any;
  styleDropdown: any;
}) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`flex items-center justify-center ${classNameButton}`}
        style={styleButton}
      >
        {buttonText}
      </button>
      {openDropdown && (
        <>
          <div
            className="fixed"
            style={{
              width: '100vw',
              height: '100vh',
              left: '0',
              top: '0',
              zIndex: -1,
            }}
            onClick={() => setOpenDropdown(false)}
          />
          <div
            style={{ zIndex: 2, ...styleDropdown }}
            className={`absolute right-0 ${classNameDropdown}`}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}

/*
<Dropdown
style={style}
className={className}
buttonText={buttonText}
size="regular"
rounded={false}
block={false}
ripple="light"
>
{children}
</Dropdown>*/
