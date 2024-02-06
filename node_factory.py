from logic_node import LogicNode
from input_node import InputNode
from output_node import OutputNode

class NodeFactory:
    """
    Factory class for creating node instances.
    """

    @staticmethod
    def create_node(node_type, *args, **kwargs):
        """
        Create and return an instance of a node based on the node_type.
        """
        if node_type == "logic":
            return LogicNode(*args, **kwargs)
        elif node_type == "input":
            return InputNode(*args, **kwargs)
        elif node_type == "output":
            return OutputNode(*args, **kwargs)
        else:
            raise ValueError(f"Unknown node type: {node_type}")
