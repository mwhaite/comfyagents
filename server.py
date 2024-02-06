from flask import Flask, render_template
from flask_socketio import SocketIO
import os

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    # Placeholder for the GUI. In a real implementation, this would serve the HTML/CSS/JS for the node-based GUI.
    return "AI Workflow GUI"

if __name__ == '__main__':
    port = os.getenv('PORT', 4000)
    socketio.run(app, host='0.0.0.0', port=port)
