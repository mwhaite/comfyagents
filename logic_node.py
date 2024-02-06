from node import Node

class LogicNode(Node):
    """
    Node for performing logical operations.
    """

    def process(self, input_data):
        """
        Process the input data through a logical operation.
        """
        # Example logical operation
        return not input_data
