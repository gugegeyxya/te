function FindProxyForURL(url, host) {
  if (shExpMatch(host, "google.com") || shExpMatch(host, "www.ip138.com")) {
    return "SOCKS5 192.168.31.249:101";
  } else {
    return "DIRECT";
  }
}
