# Mapa oblasti JavaScript

```mermaid
graph LR
    subgraph Mimo oblast JavaScript
        PRG
        HTMLCSS
    end
    subgraph Začátečníci
        JS_PROG1
        JS_DOM1
    end
    subgraph Pokročilý
        JS_PROG2
        JS_TS1
        subgraph Front-end
            JS_REACT1
            JS_ANGULAR1
            JS_SOLID1
            JS_SVELTE1
            JS_REDUX1            
        end
        subgraph Back-end
            JS_EXPRESS1
        end
        subgraph Testování
            JS_TEST_JEST
            TESTING_RESTAPI
        end
        JS_WEBSOCKET
    end
    subgraph Expert
        JS_ASYNC
        JS_REACT2
        JS_ANGULAR2
        ANGULAR_Nx
    end

    PRG --> JS_PROG1
    HTMLCSS --> JS_DOM1
    
    JS_DOM1 --> Front-end
    JS_PROG2  --> Front-end

    HTMLCSS --> Back-end
    JS_PROG2  --> Back-end
    
    JS_PROG2 --> Expert
    
    JS_PROG1 --> JS_DOM1
    JS_PROG1 --> JS_PROG2
    
    JS_PROG2 --> JS_TS1
    JS_TS1 --> JS_ANGULAR1
    
    JS_PROG2 --> JS_WEBSOCKET

    JS_PROG2 --> JS_TEST_JEST

    JS_REACT1 --> JS_REACT2
    
    JS_ANGULAR1 --> JS_ANGULAR2
    JS_ANGULAR1 --> ANGULAR_Nx
```
