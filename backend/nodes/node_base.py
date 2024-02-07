from abc import ABC, abstractmethod

class NodeBase(ABC):
    @abstractmethod
    def execute(self):
        pass
