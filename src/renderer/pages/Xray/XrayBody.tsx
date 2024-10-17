import classNames from 'classnames';
import { FC, FormEvent, useState } from 'react';
import { IpConfig, SpeedStats } from '../Landing/useLanding';
import { Language } from '../../../localization/type';
import { cfFlag } from '../../lib/cfFlag';
import XrayList from './XrayList';

interface XrayBodyProps {
  appLang: Language;
  isConnected: boolean;
  isLoading: boolean;
  ipInfo: IpConfig;
  ipData?: boolean;
  proxyMode: string;
  ping: number;
  statusText: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnSwipedLeft: () => void;
  handleOnSwipedRight: () => void;
  handleOnClickIp: () => void;
  handleOnClickPing: () => void;
  proxyStatus: string;
  appVersion: string;
  speeds: SpeedStats;
  dataUsage: boolean;
}

interface WelcomeMessageProps {
  isConnected: boolean;
  ipInfo: IpConfig;
  statusText: string;
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({
  isConnected,
  ipInfo,
  statusText,
}) => {
  if (isConnected) {
    return (
      <div className="statusBar green">
        <div className="box statusLabel">
          <h4>{statusText}</h4>

          {ipInfo.countryCode ? (
            <p>
              {ipInfo?.countryCode}:{ipInfo.ip || '127.0.0.1'}
              <img
                src={cfFlag(ipInfo.countryCode || 'xx')}
                alt={`${ipInfo?.countryCode} Flag`}
              />
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="box">
          <i className="material-icons">check_circle</i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="statusBar red">
        <div className="box statusLabel">
          <h4>{statusText}</h4>
          <p> </p>
        </div>
        <div className="box">
          <i className="material-icons">highlight_off</i>
        </div>
      </div>
    );
  }
};


const XrayBody: FC<XrayBodyProps> = ({
  appLang,
  handleOnClickIp,
  handleOnClickPing,
  handleOnSwipedLeft,
  handleOnSwipedRight,
  ipData,
  ipInfo,
  isConnected,
  isLoading,
  onSubmit,
  ping,
  proxyMode,
  statusText,
  proxyStatus,
  appVersion,
  speeds,
  dataUsage,
}) => {
  return (
    <div className={classNames('myApp', 'verticalAlign')}>
      <div className="xrayScreen">
        {WelcomeMessage({ isConnected, ipInfo, statusText })}
        <div className="xrayList">
        <XrayList  />

          {/* {isConnected ? (
            <button onClick={onSubmit} className="green actionBtn">
              {appLang?.status?.connected}
            </button>
          ) : (
            <button onClick={onSubmit} className="red actionBtn">
              {appLang?.status?.disconnected}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default XrayBody;
