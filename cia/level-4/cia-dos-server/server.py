from http.server import BaseHTTPRequestHandler, HTTPServer

# Global counter for GET requests
get_request_count = 0

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        print("received request")
        global get_request_count
        get_request_count += 1

        response_body = b"Response OK"

        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.send_header("Content-Length", str(len(response_body)))
        self.send_header("Connection", "close")
        self.end_headers()

        self.wfile.write(response_body)
        self.wfile.flush()

        # Response content
        # self.wfile.write(response.encode('utf-8'))

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Serving on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()