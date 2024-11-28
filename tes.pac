function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.translate.googleapis.com") || shExpMatch(host, "*.translate.google.com")) {
    return "SOCKS5 192.168.31.249:101";
  } else {
    return "DIRECT";
  }
}
