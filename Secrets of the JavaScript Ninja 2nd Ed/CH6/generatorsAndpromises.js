async (function*() {
    try {
        const ninjas = yield getJSON("data/ninjas.json");
        const missions = yield getJSON(ninjas[0].missionsUrl);
        const missionDescription = yield getJSON(missions[0].detailsUrl);
        //Study the mission details
    } catch (e) {
        //Oh no, we weren't able to get the mission details
    }
});

function async (generator) {
        var iterator = generator();

        function handle(iteratorResult) {
            if (iteratorResult.done) {
                return;
            }
            const iteratorValue = iteratorResult.value;
            if (iteratorValue instanceof Promise) {
                iteratorValue.then(res => handle(iterator.next(res))
                    .catch(err => iterator.throw(err));
                }
            }
            try {
                handle(iterator.next());
            } catch (e) {
                iterator.throw(e);
            }
        }