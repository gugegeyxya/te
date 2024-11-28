function FindProxyForURL(url, host) {
  if (shExpMatch(host, "myip.ipip.net") || shExpMatch(host, "translate.googleapis.com")) {
    return "SOCKS5 192.168.31.249:101";
  } else {
    return "DIRECT";
  }
}
