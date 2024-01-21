declare namespace TodoTypes {
  type TTodo = {
    id: number;
    title: string;
    comment: string;
    url: string;
    completed: boolean;
    created_at: string;
    updated_at: string;
    deadline?: string;
  };
}
