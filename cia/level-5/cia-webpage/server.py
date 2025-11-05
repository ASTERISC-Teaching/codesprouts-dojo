from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs

flag = open('/flag', 'rb').read().strip()

TARGET_HASH = 'A70B5C31D28E106F23G20H50I74J1K14L49M18N46O71P15Q1R48S63T106U23V9W26X1Y26'

def simple_hash(input_str):
    # Convert to uppercase for case-insensitive counting
    s = input_str.upper()
    char_count = {}

    # Count each letter
    for ch in s:
        if ch.isalpha():  # equivalent to isLetter(char)
            char_count[ch] = char_count.get(ch, 0) + 1

    # Sort characters alphabetically
    sorted_chars = sorted(char_count.keys())

    # Build the hash string
    hash_str = ''.join(f"{ch}{char_count[ch]}" for ch in sorted_chars)

    return hash_str

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/flag"):
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            input = params.get("input", [""])[0]
            print("received request - " + input)

            hash = simple_hash(input)

            if hash == TARGET_HASH:
                response_body = b"Successful Collision - here's your prize: " + flag
            else:
                response_body = b"Incorrect Hash"

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