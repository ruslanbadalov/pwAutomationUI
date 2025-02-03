import {test as base} from "@playwright/test"
import {TodoPage} from "./TodoPage"

type Fixture = {
    todoPage:TodoPage
}

const test = base.extend<Fixture>