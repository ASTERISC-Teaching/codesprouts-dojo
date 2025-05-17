from http.server import BaseHTTPRequestHandler, HTTPServer
import threading

# Global counter for GET requests
get_request_count = 0
THRESHOLD = 1000

lock = threading.Lock()

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        global get_request_count
        with lock:
            get_request_count += 1
        print("received request - ", get_request_count)

        if get_request_count < THRESHOLD:
            response_body = b"Server still up, Try Again :)"
        elif get_request_count == THRESHOLD:
            response_body = b"DoS Successful"
        else:
            response_body = b""

        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.send_header("Content-Length", str(len(response_body)))
        self.send_header("Connection", "close")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        self.wfile.write(response_body)
        self.wfile.flush()

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Serving on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()