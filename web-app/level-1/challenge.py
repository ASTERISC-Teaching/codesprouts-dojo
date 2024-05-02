from flask import Flask, render_template_string, jsonify
import random

app = Flask(__name__)

@app.route('/')
def hello():
    html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Hello CodeSprouts!</title>
        <style>
            body {
                background-color: #f0f0f0;
                font-family: Arial, sans-serif;
            }
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                flex-direction: column;
            }
            .content {
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333333;
            }
        </style>
        <script>
            function fetchData() {
                fetch('/workspace/challenge/get_data')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('data-container').innerHTML = data['message'];
                    })
                    .catch(error => console.error('Error:', error));
            }
        </script>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <h1>Hello, World!</h1>
                <button onclick="fetchData()">Fetch Data</button>
                <div id="data-container"></div>
            </div>
        </div>
    </body>
    </html>
    """
    return render_template_string(html)

@app.route('/get_data')
def get_data():
    # Generate a random message to simulate dynamic content
    messages = [
        "The early bird catches the worm.",
        "A watched pot never boils.",
        "A stitch in time saves nine.",
        "Actions speak louder than words."
    ]
    message = random.choice(messages)
    return jsonify({'message': message})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)
