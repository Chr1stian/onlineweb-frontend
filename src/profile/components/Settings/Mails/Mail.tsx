import React from 'react';
import { IMail } from '../../../models/Mail';
import style from './mail.less';

export interface IProps extends IMail {
  toggle: () => void;
}

const Mail = ({ email, primary, toggle }: IProps) => (
  <div className={style.mailInputGroup} onClick={toggle}>
    <input name="radio" type="radio" checked={primary} />
    <label>{email}</label>
  </div>
);

export default Mail;