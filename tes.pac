function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.translate.googleapis.com") || shExpMatch(host, "*.google.*")) {
        return "PROXY 192.168.31.249:1111";
    } else {
        return "DIRECT";
    }
}
