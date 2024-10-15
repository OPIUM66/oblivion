import classNames from 'classnames';
import { FC, FormEvent } from 'react';
import { Swipe } from 'react-swipe-component';
import { cfFlag } from '../../lib/cfFlag';
import { IpConfig, SpeedStats } from './useLanding';
import { Language } from '../../../localization/type';

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

const WelcomeMessage: FC<boolean> = (isConnected) => {
    if (isConnected) {
        return <>is Connected</>;
    } else {
        return <>is not Connected</>;
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
    dataUsage
}) => {
    return (
        <div className={classNames('myApp', 'verticalAlign')}>
            <div className='container'>
                <div className='homeScreen'>
                    <div className='title'>
                        <h1>XRAY</h1>
                    </div>
                    {WelcomeMessage(isConnected)}
                </div>
            </div>
        </div>
    );
};
export default XrayBody;
