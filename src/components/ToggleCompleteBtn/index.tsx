import {useFetcher} from 'react-router-dom';

function ToggleCompleteButton({task}) {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="post" action="/list">
            <fieldset disabled={fetcher.state !== 'idle'}>
                <input type="hidden" name="id" value={task.id} />
                <input
                    type="hidden"
                    name="status"
                    value={task.complete ? 'incomplete' : 'complete'}
                />
                <button type="submit">
                    {task.status === 'complete'
                        ? 'Mark Incomplete'
                        : 'Mark Complete'}
                </button>
            </fieldset>
        </fetcher.Form>
    );
}

export default ToggleCompleteButton;
