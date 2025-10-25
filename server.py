#!/usr/bin/env python3
"""Simple HTTP server with no-cache headers for development"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    port = 5000
    server_address = ('0.0.0.0', port)
    httpd = HTTPServer(server_address, NoCacheHTTPRequestHandler)
    print(f'Serving HTTP on 0.0.0.0 port {port} (http://0.0.0.0:{port}/) ...')
    httpd.serve_forever()
