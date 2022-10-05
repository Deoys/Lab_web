# Отчет по лабораторной №1

В итоге вы должны получить следующую информацию о ресурсе:
- IP адрес веб сервера
- порт к которому вы обращаетесь
- истинное значение хоста ресурса
- информация о необходимости кэширования
- данные о формате данных которые содержатся в теле ответа
- код ответа и его значение
- протокол по которому осуществлялся запрос
- прочая важная информация содержащаяся в заголовке (копайте глубже и найдёте ~~гематоген~~ золото)





В качестве URL ссылки использовал "https://ya.ru" [ЯНДЕКС](https://ya.ru)
Была использована команда: curl -I -v https://ya.ru

##В итоге была получена такая информация:
- [IP](87.250.250.242) "87.250.250.242"
- порт "443"
- истинное значение хоста ресурса "ya.ru"
- информация о необходимости кэширования "no-cache,no-store,max-age=0,must-revalidate"
- данные о формате данных которые содержатся в теле ответа "content-type-options: nosniff"
- код ответа и его значение "200"
- протокол по которому осуществлялся запрос "HTTP"

##В результате был получен код:
 % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 87.250.250.242:443...
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Connected to ya.ru (87.250.250.242) port 443 (#0)
 ALPN: offers h2
 ALPN: offers http/1.1
  CAfile: C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
  CApath: none
} [5 bytes data]
 TLSv1.3 (OUT), TLS handshake, Client hello (1):
} [512 bytes data]
 TLSv1.3 (IN), TLS handshake, Server hello (2):
{ [122 bytes data]
 TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
{ [15 bytes data]
 TLSv1.3 (IN), TLS handshake, Certificate (11):
{ [3673 bytes data]
 TLSv1.3 (IN), TLS handshake, CERT verify (15):
{ [79 bytes data]
 TLSv1.3 (IN), TLS handshake, Finished (20):
{ [52 bytes data]
 TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
} [1 bytes data]
 TLSv1.3 (OUT), TLS handshake, Finished (20):
} [52 bytes data]
 SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
 ALPN: server accepted h2
 Server certificate:
  subject: C=RU; ST=Moscow; L=Moscow; O=Yandex LLC; CN=*.xn--d1acpjx3f.xn--p1ai
  start date: Aug 19 10:19:21 2022 GMT
  expire date: Feb 16 20:59:59 2023 GMT
  subjectAltName: host "ya.ru" matched cert's "ya.ru"
  issuer: C=BE; O=GlobalSign nv-sa; CN=GlobalSign ECC OV SSL CA 2018
  SSL certificate verify ok.
 Using HTTP2, server supports multiplexing
 Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
} [5 bytes data]
 h2h3 [:method: HEAD]
 h2h3 [:path: /]
 h2h3 [:scheme: https]
 h2h3 [:authority: ya.ru]
 h2h3 [user-agent: curl/7.84.0]
 h2h3 [accept: */*]
 Using Stream ID: 1 (easy handle 0x2062fb005c0)
} [5 bytes data]
 HEAD / HTTP/2
 Host: ya.ru
 user-agent: curl/7.84.0
 accept: */*

{ [5 bytes data]
 TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
{ [233 bytes data]
 TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
{ [233 bytes data]
 old SSL session ID is stale, removing
{ [5 bytes data]
 Connection state changed (MAX_CONCURRENT_STREAMS == 128)!
} [5 bytes data]
  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0< HTTP/2 302
 location: https://ya.ru/?nr=1
 date: Wed, 05 Oct 2022 20:21:39 GMT
 nel: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
 x-content-type-options: nosniff
 set-cookie: yandex_csyr=1664990499:1; Expires=Sat, 02-Oct-2032 20:21:39 GMT; Domain=.ya.ru; Path=/; Secure
 set-cookie: yandexuid=4314870671665001299; Expires=Sat, 02-Oct-2032 20:21:39 GMT; Domain=.ya.ru; Path=/
 set-cookie: is_gdpr=0; Path=/; Domain=.ya.ru; Expires=Fri, 04 Oct 2024 20:21:39 GMT
 set-cookie: is_gdpr_b=COvZDxD3jQEoAg==; Path=/; Domain=.ya.ru; Expires=Fri, 04 Oct 2024 20:21:39 GMT
 set-cookie: _yasc=ah7c8q/cPMeWYC+vzE32zxVNZruBFg4tujgjiY+DPtt4Fw==; domain=.ya.ru; path=/; expires=Fri, 04-Nov-2022 20:21:39 GMT; secure
 set-cookie: i=aj3Fbfk1+ZoMeMrQUnaXRhDJnImOKVumtS/kUYDvaluf2iR+VPOvy76P1jOCcORCS+qWZOYExANpVl9vM+KXiJcpB4g=; Expires=Fri, 04-Oct-2024 20:21:39 GMT; Domain=.ya.ru; Path=/; Secure; HttpOnly
 p3p: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
 expires: Wed, 05 Oct 2022 20:21:39 GMT
 x-yandex-req-id: 1665001299391103-2977912479931487067-sas0-8326-00a-sas-l7-balancer-8080-BAL-650
 last-modified: Wed, 05 Oct 2022 20:21:39 GMT
 report-to: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
 cache-control: no-cache,no-store,max-age=0,must-revalidate

  0     0    0     0    0     0      0      0 --:--:--  0:00:03 --:--:--     0HTTP/2 302
location: https://ya.ru/?nr=1
date: Wed, 05 Oct 2022 20:21:39 GMT
nel: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
x-content-type-options: nosniff
set-cookie: yandex_csyr=1664990499:1; Expires=Sat, 02-Oct-2032 20:21:39 GMT; Domain=.ya.ru; Path=/; Secure
set-cookie: yandexuid=4314870671665001299; Expires=Sat, 02-Oct-2032 20:21:39 GMT; Domain=.ya.ru; Path=/
set-cookie: is_gdpr=0; Path=/; Domain=.ya.ru; Expires=Fri, 04 Oct 2024 20:21:39 GMT
set-cookie: is_gdpr_b=COvZDxD3jQEoAg==; Path=/; Domain=.ya.ru; Expires=Fri, 04 Oct 2024 20:21:39 GMT
set-cookie: _yasc=ah7c8q/cPMeWYC+vzE32zxVNZruBFg4tujgjiY+DPtt4Fw==; domain=.ya.ru; path=/; expires=Fri, 04-Nov-2022 20:21:39 GMT; secure
set-cookie: i=aj3Fbfk1+ZoMeMrQUnaXRhDJnImOKVumtS/kUYDvaluf2iR+VPOvy76P1jOCcORCS+qWZOYExANpVl9vM+KXiJcpB4g=; Expires=Fri, 04-Oct-2024 20:21:39 GMT; Domain=.ya.ru; Path=/; Secure; HttpOnly
p3p: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
expires: Wed, 05 Oct 2022 20:21:39 GMT
x-yandex-req-id: 1665001299391103-2977912479931487067-sas0-8326-00a-sas-l7-balancer-8080-BAL-650
last-modified: Wed, 05 Oct 2022 20:21:39 GMT
report-to: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
cache-control: no-cache,no-store,max-age=0,must-revalidate


 Connection #0 to host ya.ru left intact
