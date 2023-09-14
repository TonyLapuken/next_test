import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
// import adcode from "./adcode.js";
// import { Html } from "next/document";
import Script from "next/script";
function TestButton() {
  return useEffect(() => {
    <Script id="show-banner">{`atOptions = {
		'key' : '250635a98ec0cadf39c307fdb5ddf767',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplaynetwork.com/250635a98ec0cadf39c307fdb5ddf767/invoke.js"></scr' + 'ipt>');`}</Script>;
  }, []);
}

export default TestButton;
