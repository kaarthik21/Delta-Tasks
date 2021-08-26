FROM ubuntu:14.04

RUN apt-get install -y python
RUN mkdir serverroot
 
COPY mobile-version-server2.html serverroot/

WORKDIR /serverroot
CMD python -m SimpleHTTPServer 55555
