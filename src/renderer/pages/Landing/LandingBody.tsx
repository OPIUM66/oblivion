import classNames from 'classnames';
import { FC, FormEvent } from 'react';
import { Swipe } from 'react-swipe-component';
import { cfFlag } from '../../lib/cfFlag';
import { IpConfig, SpeedStats } from './useLanding';
import { Language } from '../../../localization/type';

interface LandingBodyProps {
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

const LandingBody: FC<LandingBodyProps> = ({
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
    const pingIsZero = ping === 0;
    const generateRandomString = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        
        for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            if (i === 3) result += ' '; // Add space after the fourth character
        }
        
        return result;
    }
    
    return (
        <div className={classNames('myApp', 'verticalAlign')}>
            <div className='container'>
                <div className='homeScreen'>
                    <div className='title'>
                        <h1>OBLIVION <span style={{fontSize:14}}>{generateRandomString()}</span></h1>
                        <h2>
                            {appLang?.home?.title_warp_based}{' '}
                            <span className='badge'>v{appVersion.replace('-beta', '')}</span>
                        </h2>
                    </div>
                    <form action='' onSubmit={onSubmit}>
                        <div className='connector'>
                            <Swipe
                                nodeName='div'
                                onSwipedLeft={handleOnSwipedLeft}
                                onSwipedRight={handleOnSwipedRight}
                            >
                                <button
                                    type='submit'
                                    role='switch'
                                    aria-checked={isConnected}
                                    tabIndex={0}
                                    className={classNames(
                                        'switch',
                                        isConnected ? 'active' : '',
                                        isLoading ? 'isLoading' : ''
                                    )}
                                >
                                    <div className='circle'>
                                        <div className='spinner' />
                                    </div>
                                </button>
                            </Swipe>
                        </div>
                    </form>
                    <div
                        className={classNames(
                            'status',
                            isConnected && !isLoading && (ipInfo?.countryCode || !ipData)
                                ? 'active'
                                : ''
                        )}
                    >
                        {statusText}
                    </div>
                    <div
                        className={classNames(
                            'inFoot',
                            'withIp',
                            isConnected &&
                                !isLoading &&
                                proxyMode !== 'none' &&
                                proxyStatus !== 'none' &&
                                proxyMode !== '' &&
                                ipData
                                ? 'active'
                                : ''
                        )}
                    >
                        <div
                            role='presentation'
                            className={classNames('item', ipData ? '' : 'hidden')}
                            onClick={handleOnClickIp}
                        >
                            <img
                                src={cfFlag(ipInfo.countryCode || 'xx')}
                                alt={`${ipInfo?.countryCode} Flag`}
                            />
                            <span className={ipInfo?.countryCode ? '' : 'shimmer'}>
                                {ipInfo.ip || '127.0.0.1'}
                            </span>
                        </div>
                        <div className={classNames('item', 'speed')}>
                            <div
                                className='download isPing'
                                role='presentation'
                                onClick={handleOnClickPing}
                            >
                                <i className='material-icons'>&#xebca;</i>
                                <span className={pingIsZero ? 'shimmer' : ''}>
                                    {ping > 0
                                        ? String(ping).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ms'
                                        : 'timeout'}
                                </span>
                            </div>
                            <div
                                className={classNames(
                                    'upload',
                                    'hasTooltip',
                                    dataUsage ? '' : 'hidden'
                                )}
                            >
                                <i className='material-icons'>&#xe1af;</i>
                                <span
                                    className={
                                        pingIsZero || speeds.totalUsage.unit === 'N/A'
                                            ? 'shimmer'
                                            : ''
                                    }
                                >
                                    {speeds.totalUsage.value}{' '}
                                    <small>{speeds.totalUsage.unit}</small>
                                </span>
                                <div
                                    className={classNames(
                                        'isTooltip',
                                        speeds.totalUpload.value === 'N/A' ||
                                            speeds.totalDownload.value === 'N/A' ||
                                            pingIsZero ||
                                            speeds.totalUsage.unit === 'N/A'
                                            ? 'hidden'
                                            : ''
                                    )}
                                >
                                    <i className='material-icons'>&#xe5d8;</i>
                                    <span>
                                        {speeds.totalUpload.value}{' '}
                                        <small>{speeds.totalUpload.unit}</small>
                                    </span>
                                    <div className='clearfix' />
                                    <i className='material-icons latest'>&#xe5db;</i>
                                    <span>
                                        {speeds.totalDownload.value}{' '}
                                        <small>{speeds.totalDownload.unit}</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            role='presentation'
                            className={classNames('item', 'speed', dataUsage ? '' : 'hidden')}
                        >
                            <div className='download'>
                                <i className='material-icons'>&#xe2c0;</i>
                                <span
                                    className={
                                        pingIsZero || speeds.currentDownload.unit === 'N/A'
                                            ? 'shimmer'
                                            : ''
                                    }
                                >
                                    {speeds.currentDownload.value}{' '}
                                    <small>{speeds.currentDownload.unit}</small>
                                </span>
                            </div>
                            <div className='upload'>
                                <i className='material-icons'>&#xe2c3;</i>
                                <span
                                    className={
                                        pingIsZero || speeds.currentUpload.unit === 'N/A'
                                            ? 'shimmer'
                                            : ''
                                    }
                                >
                                    {speeds.currentUpload.value}{' '}
                                    <small>{speeds.currentUpload.unit}</small>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LandingBody;
