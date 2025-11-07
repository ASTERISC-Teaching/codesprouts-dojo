from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import re

flag = open('/flag', 'rb').read().strip()
plaintext = open("/challenge/plaintext", "r").read()

def remove_whitespace(s):
    return re.sub(r'\s+', '', s)

class RequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/flag"):
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            input = params.get("input", [""])[0]
            print("received request - " + input)

            if remove_whitespace(input) == remove_whitespace(plaintext):
                response_body = flag
            else:
                response_body = b"Incorrect Input"

            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.send_header("Content-Length", str(len(response_body)))
            self.send_header("Connection", "close")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            self.wfile.write(response_body)
            self.wfile.flush()
        else:
            super().do_GET()

def run(server_class=HTTPServer, handler_class=RequestHandler, port=80):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Serving on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()