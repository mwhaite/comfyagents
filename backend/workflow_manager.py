class WorkflowManager:
    def __init__(self):
        self.workflows = {}

    def create_workflow(self, workflow_id):
        self.workflows[workflow_id] = []

    def execute_workflow(self, workflow_id):
        for node in self.workflows[workflow_id]:
            node.execute()
