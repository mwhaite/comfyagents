from node import Node

class InputNode(Node):
    """
    Node for handling user inputs.
    """

    def process(self, input_data=None):
        """
        Returns the input data provided by the user.
        """
        # In a real scenario, this might fetch data from a GUI or external source
        return "User input data"
