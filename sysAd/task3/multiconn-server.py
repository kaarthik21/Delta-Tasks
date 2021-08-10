#!/usr/bin/env python3

import socket 
import threading
import tqdm
import os


class ClientThread(threading.Thread):
    def __init__(self,clientAddress,clientsocket):
        threading.Thread.__init__(self)
        self.csocket = clientsocket
        print ("New connection added: ", clientAddress)
    def run(self):
        print ("Connection from : ", clientAddress)
        #self.csocket.send(bytes("Hi, This is from Server..",'utf-8'))
        msg = ''
        while True:
            data = self.csocket.recv(2048)
            msg = data.decode()
            if msg=='bye':
                break
            print ("From client: ", msg)
            self.csocket.send(bytes(msg,'UTF-8'))
        print ("Client at ", clientAddress , " disconnected...")


LOCALHOST = "127.0.0.1"
PORT = 8080
BUFFER_SIZE = 4096
SEPARATOR = "   "
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind((LOCALHOST, PORT))
print("Server started")
print("Waiting for client request..")
while True:
    server.listen(1)
    clientsock, clientAddress = server.accept()
    newthread = ClientThread(clientAddress, clientsock)
    newthread.start()

    filename_server_web = "web.txt"
    a = open(filename_server_web, 'rb')
    a_read = a.read(1024)
    while(a_read):
        clientsock.send(a_read)
        print('Sent web file from server. ', repr(a_read))
        a_read = a.read(1024)
        a.close()

    filename_server_app = "app.txt"
    b = open(filename_server_app, 'rb')
    b_read = b.read(1024)
    while(b_read):
        clientsock.send(b_read)
        print('Sent app file from server. ', repr(b_read))
        b_read = b.read(1024)
        b.close()

    filename_server_sys = "sys.txt"
    c = open(filename_server_sys, 'rb')
    c_read = c.read(1024)
    while(c_read):
        clientsock.send(c_read)
        print('Sent sysAd file from server. ', repr(c_read))
        c_read = c.read(1024)
        c.close()

    #newthread = ClientThread(clientAddress, clientsock)
    #object for class ClientThread
    #newthread.start()
    received = clientsock.recv(BUFFER_SIZE).decode()
    filename_client, filesize_client = received.split(SEPARATOR)
    #remove absolute path if exists
    filename = os.path.basename(filename_client)
    #convert to interger
    filesize_client = int(filesize_client)
    progress = tqdm.tqdm(range(filesize_client), f"Receiving {filename}", unit="B", unit_scale=True, unit_divisor=1024)
    with open(filename_client, "wb") as f:
        while True:
            # read 1024 bytes from the socket (receive)
            bytes_read = clientsock.recv(BUFFER_SIZE)
            if not bytes_read:
            # nothing is received
            # file transmitting is done
                break
            # write to the file the bytes we just received
            f.write(bytes_read)
            # update the progress bar
            progress.update(len(bytes_read))

# close the client socket
clientsock.close()
