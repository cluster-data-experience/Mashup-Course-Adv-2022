import React, {
    useState, useContext, createContext
} from 'react';

const RightFiltersContext = createContext();

function RightFiltersProvider({ children }) {
    const [rightFiltersOpened, setRightFiltersOpened] = useState(false);

    function manageRightFilters(value) {
        setRightFiltersOpened(value);

        const body = document.querySelector("body");
        body.classList.toggle("nav-right-toggle");
    }

    return (
        <RightFiltersContext.Provider value={{ rightFiltersOpened, manageRightFilters }}>
            {children}
        </RightFiltersContext.Provider>
    );
}

function useRightFilters() {
    const context = useContext(RightFiltersContext);

    if (!context) {
        throw new Error(' useRightFilters should be used within a RightFiltersProvider');
    }

    return context;
}

RightFiltersProvider.defaultProps = {
    children: {}
};

export { RightFiltersProvider, useRightFilters };
