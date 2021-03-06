import React from 'react';
import { CSSProperties } from 'styled-components';

interface IFormField {
  name: string;
  type: string;
  required: boolean;
  className?: string;
  style?: CSSProperties;
  styleInput?: CSSProperties;
  classNameInput?: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export default function FormField({
  name,
  type,
  required,
  className,
  style,
  styleInput,
  classNameInput,
  placeholder,
  onChange,
  value,
}: IFormField) {
  return (
    <div
      className={`mt-2  flex flex-col transition-all relative ${className}`}
      style={style}
    >
      <label htmlFor={name} className="sr-only">
        {name}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        autoComplete="email"
        required={required}
        style={styleInput}
        className={`appearance-none my-1 rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm ${classNameInput}`}
        placeholder={placeholder}
      />
    </div>
  );
}
