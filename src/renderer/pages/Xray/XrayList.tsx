import React, { useState } from 'react';
import classNames from 'classnames';
import { cfFlag } from '../../lib/cfFlag';

interface XrayListProps {}

const XrayList: React.FC<XrayListProps> = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newIp, setNewIp] = useState<string>('');

  const handleAdd = () => {
    setNewIp('');
  };
  const onDelete = () => {
    setNewIp('');
  };

  const handleUpdate = () => {
    setEditingId(null);
  };

  return (
    <div className="crud-list">
      <div className="crud-input">
        <input
          type="text"
          value={newIp}
          onChange={(e) => setNewIp(e.target.value)}
          placeholder="vless:// , trojan:// , ssh:// , other"
        />
        <button className="actionBtn" onClick={handleAdd}>
        <i className="material-icons">add</i>
        </button>
      </div>

      <ul className="crud-items">
        {[
          { id: 1, ip: '192.168.0.1', countryCode: 'us' },
          { id: 2, ip: '172.16.0.1', countryCode: 'ca' },
          { id: 3, ip: '10.0.0.1', countryCode: 'de' },
        ].map((config) => (
          <li key={config.id} className="crud-item">
            {editingId === config.id ? (
              <input
                type="text"
                value={config.ip}
                onChange={(e) =>
                  handleUpdate({ ...config, ip: e.target.value })
                }
              />
            ) : (
              <>
                <span>
                  {' '}
                  <img
                    src={cfFlag(config.countryCode)}
                    alt={`${config.countryCode} Flag`}
                    className="crud-flag"
                  />
                  {config.ip}
                </span>
              </>
            )}
            <div className="crud-actions">
              <button
                className="actionBtn"
                onClick={() => setEditingId(config.id)}
              >
                <i className="material-icons">edit</i>
              </button>
              <button
                className="actionBtn"
                onClick={() => onDelete(config.id)}
              >
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
