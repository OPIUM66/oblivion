import classNames from 'classnames';
import { FC, FormEvent } from 'react';
import { IpConfig, SpeedStats } from '../Landing/useLanding';
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


interface WelcomeMessageProps {
    isConnected: boolean;
    ipInfo: {
        countryCode: string
    };
}


const WelcomeMessage: FC<WelcomeMessageProps> = ({isConnected , ipInfo}) => {
    if (isConnected) {
        return (
            <div className='statusBar green'>
                <div className='box statusLabel'>
                    <h4>Connected</h4>
                    <p>{ipInfo?.countryCode}</p>
                </div>
                <div className='box'><i className="material-icons">check_circle</i></div>
            </div>
        );
    } else {
        return (
            <div className='statusBar red'>
                <div className='box statusLabel'>
                    <h4>Disconnected</h4>
                    <p> </p>
                </div>
                <div className='box'><i className="material-icons">highlight_off</i></div>
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
    dataUsage
}) => {
    return (
        <div className={classNames('myApp', 'verticalAlign')}>
            <div className='xrayScreen'>
                <div className='title'>
                    <h1>XRAY</h1>
                </div>
                {WelcomeMessage({isConnected , ipInfo})}
                
            </div>
        </div>
    );
};
export default XrayBody;
