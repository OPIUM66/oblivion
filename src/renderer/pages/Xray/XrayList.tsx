import React, { useState } from 'react';
import classNames from 'classnames';
import { cfFlag } from '../../lib/cfFlag';

interface XrayListProps {}
interface handleAddTypes {
  value: string;
}

interface Item {
  id: string;
  ip: string;
  createdAt: number;
  countryCode: string;
}

const XrayList: React.FC<XrayListProps> = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [Ips, setNewIp] = useState<Item[]>([]); // Array of Item objects
  const [TempIp, setTempIp] = useState<string>('');

  const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
      if (i === 3) result += ' '; // Add space after the fourth character
    }

    return result;
  };

  const addIp = (ip: string) => {
    setNewIp((prevItems) => [
      ...(prevItems || []),
      {
        id: generateRandomString(),
        ip,
        createdAt: new Date().getTime(),
        countryCode: 'de',
      },
    ]);
  };

  const handleAdd = () => {
    const value = document.getElementById('ipInput')?.value;
    if (value === '' || typeof value !== 'string' || !value.includes('vless')) {
      console.log('value is not valid');
      return;
    }

    addIp(value);
    // setTempIp('')
  };

  const handleDelete = (id: string) => {
    setNewIp((prevItems) => prevItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="crud-list">
      <div className="crud-input">
        <input
          value={TempIp}
          id="ipInput"
          onChange={(e) => {
            setTempIp(e.target.value);
          }}
          type="text"
          placeholder="vless:// , trojan:// , ssh:// , other"
        />
        <button className="actionBtn" onClick={handleAdd}>
          <i className="material-icons">add</i>
        </button>
      </div>

      <ul className="crud-items">
        {Ips.map((config) => (
          <li key={config.id} className="crud-item">
            <span>
              {' '}
              <img
                src={cfFlag(config.countryCode)}
                alt={`${config.countryCode} Flag`}
                className="crud-flag"
              />
              {config.ip}
            </span>
            <div className="crud-actions">
              <button className="actionBtn">
                <i className="material-icons">edit</i>
              </button>
              <button className="actionBtn" onClick={() => handleDelete(config.id) }>
                <i className="material-icons">close</i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XrayList;
