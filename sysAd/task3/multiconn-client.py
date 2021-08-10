#!/usr/bin/env python3
import socket
import tqdm
import os
SEPARATOR = "   "
BUFFER_SIZE = 4096
SERVER = "127.0.0.1"
PORT = 8080
filename_client = "client_to_server.txt"
filesize_client = os.path.getsize(filename_client)
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect((SERVER, PORT))

#client.send(bytes("This is from Client",'UTF-8'))

#DOWNLOADING FILES FROM SERVER
with open("web.txt", 'wb') as g:
    print ('file web.txt opened')
    while True:
        
        print('receiving data...')
        #data1 = client.recv(1024)
        data1 = "".join(iter(lambda:client.recv(1),"\n"))
        print('data = ', (data1))
        if not data1:
            break
        g.write(data1)
        g.close()

with open("app.txt", 'wb') as h:
    print ('file app.txt opened')
    while True:
        print('receiving data...')
        #data2 = client.recv(1024)
        data2 = "".join(iter(lambda:client.recv(1),"\n"))       

        print('data = ', (data2))
        if not data2:
            break
        h.write(data2)
        h.close()

with open("sys.txt", 'wb') as i:
    print ('file sys.txt opened')
    while True:
        print('receiving data...')
        data3 = "".join(iter(lambda:client.recv(1),"\n"))       

        #data3 = client.recv(1024)
        print('data = ', (data3))
        if not data3:
            break
        i.write(data3)
        i.close()

#UPLOADING FILE FROM CLIENT TO SERVER
client.send(f"{filename}{SEPARATOR}{filesize}".encode())
progress = tqdm.tqdm(range(filesize_client), f"Sending {filename}", unit="B", unit_scale=True, unit_divisor=1024)
with open(filename_client, "rb") as f:
    while True:
        #read the file bite by bite
        bytes_read = f.read(BUFFER_SIZE)
        if not bytes_read:
            #file transmitting done
            break
        client.sendall(bytes_read)
        progress.update(len(bytes_read))


while True:
    in_data =  client.recv(1024)
    print("From Server :" ,in_data.decode())
    out_data = input()
    client.sendall(bytes(out_data,'UTF-8'))
    if out_data=='bye':
        break

client.close()
