import React from 'react';

interface Props {
  placeholder: string;
  defaultValue: string;
  name: string;
  register: any;
  type: string;
  className: string
}
export default function FormInput ({placeholder, defaultValue, register, name, type, className}: Props) {
  return (
    <input className={className} type={type} placeholder={placeholder} defaultValue={defaultValue} {...register(name)} />
  )
}