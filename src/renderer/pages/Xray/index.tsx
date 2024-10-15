import 'react-modern-drawer/dist/index.css';
import XrayHeader from './XrayHeader';
import useLanding from '../Landing/useLanding';
import LandingHeader from '../Landing/LandingHeader';
import LandingDrawer from '../Landing/LandingDrawer';
import XrayBody from './XrayBody';

export default function Xray() {

    const {
        appLang,
        drawerIsOpen,
        ipData,
        lang,
        proxyMode,
        handleMenuOnKeyDown,
        handleOnClickIp,
        handleOnClickPing,
        handleOnSwipedLeft,
        handleOnSwipedRight,
        hasNewUpdate,
        ipInfo,
        isConnected,
        isLoading,
        onSubmit,
        ping,
        statusText,
        toggleDrawer,
        proxyStatus,
        appVersion,
        shortcut,
        speeds,
        dataUsage
    } = useLanding();
    console.log('dataUsage' , dataUsage);
    console.log('ipData' , ipData);
    console.log('ipInfo' , ipInfo);
    console.log('isConnected' , isConnected);
    
    
    return (
        <>

            <LandingHeader
                handleMenuOnKeyDown={handleMenuOnKeyDown}
                hasNewUpdate={hasNewUpdate}
                toggleDrawer={toggleDrawer}
            />
            <LandingDrawer
                appLang={appLang}
                drawerIsOpen={drawerIsOpen}
                lang={lang}
                toggleDrawer={toggleDrawer}
                hasNewUpdate={hasNewUpdate}
                appVersion={appVersion}
            />
            <XrayBody
                appLang={appLang}
                handleOnClickIp={handleOnClickIp}
                handleOnClickPing={handleOnClickPing}
                handleOnSwipedLeft={handleOnSwipedLeft}
                handleOnSwipedRight={handleOnSwipedRight}
                ipData={ipData}
                ipInfo={ipInfo}
                isConnected={isConnected}
                isLoading={isLoading}
                onSubmit={onSubmit}
                ping={ping}
                proxyMode={proxyMode}
                statusText={statusText}
                proxyStatus={proxyStatus}
                appVersion={appVersion}
                speeds={speeds}
                dataUsage={dataUsage}
            />
        </>

    );
}
