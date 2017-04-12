export interface Result {
    ontology: string;
    term: string;
    definition: string;
}

export const MOCK_RESULTS: Result[] = [
    {ontology: 'BFO', term: 'generically dependent continuant', definition: 'A continuant that is dependent on one or other independent continuant bearers. For every instance of A requires some instance of (an independent continuant type) B but which instance of B serves can change from time to time.'},
    {ontology: 'IAO', term: 'information content entity', definition: 'A generically dependent continuant that is about some thing.'},
    {ontology: 'DIDEO', term: 'evidence information from an observation-based case-report of a drug interaction', definition: 'An evidence information content entity that is about an assay that was triggered by an adverse drug event following the administration of at least two drugs.'},
    {ontology: 'OBI', term: 'scattered molecular aggregate', definition: 'A scattered molecular aggregate is a material entity that consists of all the molecules of a specific type that are located in some bounded region and which is part of a more massive material entity that has parts that are other such aggregates'},
];
