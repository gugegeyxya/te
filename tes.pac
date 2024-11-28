function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.translate.googleapis.com") || shExpMatch(host, "*.translate.google.com")) {
        return "PROXY 192.168.31.249:1111";
    } else {
        return "DIRECT";
    }
}
