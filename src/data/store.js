import { create } from 'zustand'

const useProntoStore = create(set => ({
	// State
	count: 0,

	// Mutators - funktioner som returnerar nästa state
	countMutator: diff => set(state => {
		const newCount = state.count + diff
		if( newCount >= 0 ) {
			return { count: newCount }
		}
		return {}
	})  // countMutator slutar här

}))
export { useProntoStore }
