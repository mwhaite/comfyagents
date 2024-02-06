from abc import ABC, abstractmethod
from dataclasses import dataclass

@dataclass
class Node(ABC):
    """
    Abstract base class for nodes in the workflow.
    """
    id: str
    name: str

    @abstractmethod
    def process(self, input_data):
        """
        Process input data and return the result.
        """
        pass
