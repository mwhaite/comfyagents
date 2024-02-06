from node import Node

class OutputNode(Node):
    """
    Node for managing outputs.
    """

    def process(self, input_data):
        """
        Handles the output of data.
        """
        # In a real scenario, this might send data to a GUI or external system
        print(f"Output: {input_data}")
