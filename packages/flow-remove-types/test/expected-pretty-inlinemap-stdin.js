/*  */
// @nolint

// Regular import
import {
  Something,
} from 'some-module';

// Import types

// Typed function
async function test(x, y /*.*/ /*.*/ , z /*.*/ /*.*/ = 123) {
  // Typed expression
  return await (x);
}

// Interface

// Exported interface

// Interface extends

// Implements interface
class Bar extends Other /*.*/ {
  // Class Property with default value
  answer = 42;

  // Class Property

  method() {
    return;
  }
}

// Class expression implements interface
var SomeClass = class Baz {

  method() {
    return;
  }
};

// Parametric class
class Wrapper {
  get() {
    return this.value;
  }

  map() {
    // do something
  }
}

// Extends Parametric class
class StringWrapper extends Wrapper {
  // ...
}

// Declare class

// Declare funtion

// Declare interface

// Declare module

// Declare type alias

// Declare variable

// Type alias

// Export type

// Regular export
export { Wrapper };

// Exported type alias

// Object with types within
var someObj = {
  objMethod() {
    // do nothing.
  }
}

// Example from README
import SomeClass from 'some-module'

export class MyClass extends SomeClass {


  constructor(value) {
    this.value = value
  }

  get() {
    return this.value
  }

}

// Test async/await functions
async function asyncFunction(input) {
  return await t;
}

// Test read-only data

// Test covariant type variant class with constaint and default.
export class TestClassWithDefault {

  constructor() {}
}

var newline_arrow = () => 42;

var newline_arrow_2 = ()=>42;

// Test calling a function with explicit type arguments
doSomething(3);
doSomething(3);

// Test invoking a constructor with explicit type arguments
new Event();

// Test type union and intersection syntax with leading "operator"
var union;
var intersection;

// Test generic async arrow funcion
const f = async() => {};

// Comment type annotations are preserved
var X /*: {
  version: string,
} */ = { version: '42'};

function method(param /*: string */) /*: number */ {
  // ...
}

// Comment type includes are emptied out
class MyClass {
  /*:: */
}

// Inferred predicate
function testit(arg) {
  return !!arg;
}

// Test function with default type parameter
function f() {}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxzdGRpbj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkdBQUcsQUFBSzs7Ozs7O0VBTU4sQUFBQSxBQUFJLENBQUMsQUFBQSxBQUFRLEFBQUMsQUFBQTtFQUNkLEFBQUEsQUFBTSxDQUFDLEFBQUEsQUFBYyxBQUFBOzs7O0FBSXZCLEFBQTRDLEFBQUE7OztxQkFHdkIsQUFBTSxVQUFVLEFBQUEsQUFBQyxpQkFBaUIsQUFBQSxBQUFDLE9BQU8sQUFBQSxBQUFjLE9BQU8sQUFBUTs7aUJBRTNFLEFBQUs7Ozs7QUFJdEIsQUFJQyxBQUFBOzs7QUFHRCxBQUVDLEFBQUE7OztBQUdELEFBRUMsQUFBQTs7O3dCQUd1QixBQUFBLEFBQVUsT0FBTyxBQUFBLEFBQUcsQUFBQyxDQUFDLEFBQUEsQUFBVTs7UUFFaEQsQUFBUTs7O0VBR2QsQUFBQSxBQUFVLEFBQUE7O1VBRUYsQUFBTzs7Ozs7OzBCQU1TLEFBQUEsQUFBVSxDQUFDLEFBQUEsQUFBRztFQUN0QyxBQUFBLEFBQVUsQUFBQTs7VUFFRixBQUFPOzs7Ozs7YUFNSixBQUFHO09BQ1QsQUFBRzs7OztLQUlMLEFBQUcsRUFBRSxBQUFZOzs7Ozs7bUNBTWEsQUFBUTs7Ozs7QUFLM0MsQUFFQyxBQUFBOzs7QUFHRCxBQUFrQyxBQUFBOzs7QUFHbEMsQUFFQyxBQUFBOzs7QUFHRCxBQUVDLEFBQUE7OztBQUdELEFBR0UsQUFBQTs7O0FBR0YsQUFBK0IsQUFBQTs7O0FBRy9CLEFBQWdCLEFBQUE7OztBQUdoQixBQUFrQixBQUFBOzs7Ozs7QUFNbEIsQUFBa0MsQUFBQTs7OzthQUlyQixBQUFNOzs7Ozs7O0FBT25CLEFBQWdELEFBQUE7O29CQUU1QixBQUFHLG1CQUFtQixBQUFBLEFBQVUsQ0FBQyxBQUFBLEFBQWE7O0VBRWhFLEFBQUEsQUFBUSxBQUFBOzttQkFFUyxBQUFHOzs7O09BSWYsQUFBRzs7Ozs7Ozs0QkFPa0IsQUFBRyxNQUFNLEFBQUcsQ0FBQyxBQUFZOzs7OztBQUtyRCxBQUVHLEFBQUE7OztpQ0FHOEIsQUFBaUM7Ozs7O3NCQUs1QyxBQUNoQjs7eUJBRW1CLEFBQUEsQUFDbkI7OztXQUdLLEFBQVE7WUFDUCxBQUFBLEFBQU07OztTQUdULEFBQVE7OztTQUdSLEFBQVM7Z0JBQ0YsQUFBUzs7O2dCQUdULEFBQUEsQUFBRyxFQUFFLEFBQUc7Ozs7Ozs7Ozs7Ozs7T0FhakIsQUFBQSxBQUFhOzs7O21CQUlELEFBQU8sQ0FBQyxBQUFTLENBQUMsQUFBQSxBQUFPOzs7OztVQUtsQyxBQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cbi8vIEBub2xpbnRcblxuLy8gUmVndWxhciBpbXBvcnRcbmltcG9ydCB7XG4gIFNvbWV0aGluZyxcbiAgdHlwZSBTb21lVHlwZSxcbiAgdHlwZW9mIFNvbWVPdGhlclRoaW5nXG59IGZyb20gJ3NvbWUtbW9kdWxlJztcblxuLy8gSW1wb3J0IHR5cGVzXG5pbXBvcnQgdHlwZSB7IFNvbWVUeXBlIH0gZnJvbSAnc29tZS1tb2R1bGUnO1xuXG4vLyBUeXBlZCBmdW5jdGlvblxuYXN5bmMgZnVuY3Rpb24gdGVzdCh4OiBUeXBlLCB5IC8qLiovID8gLyouKi8gLCB6IC8qLiovID8gLyouKi8gOiAvKi4qLyBudW1iZXIgPSAxMjMpOiBzdHJpbmcge1xuICAvLyBUeXBlZCBleHByZXNzaW9uXG4gIHJldHVybiBhd2FpdCAoeDogYW55KTtcbn1cblxuLy8gSW50ZXJmYWNlXG5pbnRlcmZhY2UgRm9vIHtcbiAgcHJvcDogYW55O1xuXG4gIG1ldGhvZCgpOiBtaXhlZDtcbn1cblxuLy8gRXhwb3J0ZWQgaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIElUaGluZyB7XG4gIGV4cG9ydGVkOiB0cnVlO1xufVxuXG4vLyBJbnRlcmZhY2UgZXh0ZW5kc1xuaW50ZXJmYWNlIFNpbGx5Rm9vIGV4dGVuZHMgRm9vIHtcbiAgc2lsbHk6IHN0cmluZztcbn1cblxuLy8gSW1wbGVtZW50cyBpbnRlcmZhY2VcbmNsYXNzIEJhciBleHRlbmRzIE90aGVyIGltcGxlbWVudHMgLyouKi8gRm9vLCBJU29tZXRoaW5nIHtcbiAgLy8gQ2xhc3MgUHJvcGVydHkgd2l0aCBkZWZhdWx0IHZhbHVlXG4gIGFuc3dlcjogbnVtYmVyID0gNDI7XG5cbiAgLy8gQ2xhc3MgUHJvcGVydHlcbiAgcHJvcDogYW55O1xuXG4gIG1ldGhvZCgpOiBtaXhlZCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIENsYXNzIGV4cHJlc3Npb24gaW1wbGVtZW50cyBpbnRlcmZhY2VcbnZhciBTb21lQ2xhc3MgPSBjbGFzcyBCYXogaW1wbGVtZW50cyBGb28ge1xuICBwcm9wOiBhbnk7XG5cbiAgbWV0aG9kKCk6IG1peGVkIHtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbi8vIFBhcmFtZXRyaWMgY2xhc3NcbmNsYXNzIFdyYXBwZXI8VD4ge1xuICBnZXQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBtYXA8TT4oKTogV3JhcHBlcjxNPiB7XG4gICAgLy8gZG8gc29tZXRoaW5nXG4gIH1cbn1cblxuLy8gRXh0ZW5kcyBQYXJhbWV0cmljIGNsYXNzXG5jbGFzcyBTdHJpbmdXcmFwcGVyIGV4dGVuZHMgV3JhcHBlcjxzdHJpbmc+IHtcbiAgLy8gLi4uXG59XG5cbi8vIERlY2xhcmUgY2xhc3NcbmRlY2xhcmUgY2xhc3MgQmF6IHtcbiAgbWV0aG9kKCk6IG1peGVkO1xufVxuXG4vLyBEZWNsYXJlIGZ1bnRpb25cbmRlY2xhcmUgZnVuY3Rpb24gc29tZUZ1bmMoKTogdm9pZDtcblxuLy8gRGVjbGFyZSBpbnRlcmZhY2VcbmRlY2xhcmUgaW50ZXJmYWNlIElTb21ldGhpbmcge1xuICBhbnN3ZXI6IG51bWJlcjtcbn1cblxuLy8gRGVjbGFyZSBtb2R1bGVcbmRlY2xhcmUgbW9kdWxlICdmcycge1xuICBkZWNsYXJlIGZ1bmN0aW9uIHJlYWRUaGluZyhwYXRoOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbi8vIERlY2xhcmUgdHlwZSBhbGlhc1xuZGVjbGFyZSB0eXBlIExvY2F0aW9uID0ge1xuICBsYXQ6IG51bWJlcixcbiAgbG9uOiBudW1iZXJcbn07XG5cbi8vIERlY2xhcmUgdmFyaWFibGVcbmRlY2xhcmUgdmFyIFNPTUVfQ09OU1Q6IHN0cmluZztcblxuLy8gVHlwZSBhbGlhc1xudHlwZSBUID0gc3RyaW5nO1xuXG4vLyBFeHBvcnQgdHlwZVxuZXhwb3J0IHR5cGUgeyBUIH07XG5cbi8vIFJlZ3VsYXIgZXhwb3J0XG5leHBvcnQgeyBXcmFwcGVyIH07XG5cbi8vIEV4cG9ydGVkIHR5cGUgYWxpYXNcbmV4cG9ydCB0eXBlIE9ORSA9IHsgb25lOiBudW1iZXIgfTtcblxuLy8gT2JqZWN0IHdpdGggdHlwZXMgd2l0aGluXG52YXIgc29tZU9iaiA9IHtcbiAgb2JqTWV0aG9kKCk6IHZvaWQge1xuICAgIC8vIGRvIG5vdGhpbmcuXG4gIH1cbn1cblxuLy8gRXhhbXBsZSBmcm9tIFJFQURNRVxuaW1wb3J0IFNvbWVDbGFzcyBmcm9tICdzb21lLW1vZHVsZSdcbmltcG9ydCB0eXBlIHsgU29tZUludGVyZmFjZSB9IGZyb20gJ3NvbWUtbW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgTXlDbGFzczxUPiBleHRlbmRzIFNvbWVDbGFzcyBpbXBsZW1lbnRzIFNvbWVJbnRlcmZhY2Uge1xuXG4gIHZhbHVlOiBUXG5cbiAgY29uc3RydWN0b3IodmFsdWU6IFQpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIGdldCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbn1cblxuLy8gVGVzdCBhc3luYy9hd2FpdCBmdW5jdGlvbnNcbmFzeW5jIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb248VD4oaW5wdXQ6IFQpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIGF3YWl0IHQ7XG59XG5cbi8vIFRlc3QgcmVhZC1vbmx5IGRhdGFcbmV4cG9ydCB0eXBlIFRlc3RSZWFkT25seSA9IHt8XG4gICtyZWFkT25seTogJFJlYWRPbmx5QXJyYXk8PlxufH07XG5cbi8vIFRlc3QgY292YXJpYW50IHR5cGUgdmFyaWFudCBjbGFzcyB3aXRoIGNvbnN0YWludCBhbmQgZGVmYXVsdC5cbmV4cG9ydCBjbGFzcyBUZXN0Q2xhc3NXaXRoRGVmYXVsdDwrVDogVGVzdFJlYWRPbmx5ID0gVGVzdFJlYWRPbmx5PiB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG52YXIgbmV3bGluZV9hcnJvdyA9ICgpOlxubnVtYmVyID0+IDQyO1xuXG52YXIgbmV3bGluZV9hcnJvd18yID0gKCkgOlxubnVtYmVyPT40MjtcblxuLy8gVGVzdCBjYWxsaW5nIGEgZnVuY3Rpb24gd2l0aCBleHBsaWNpdCB0eXBlIGFyZ3VtZW50c1xuZG9Tb21ldGhpbmc8bnVtYmVyPigzKTtcbmRvU29tZXRoaW5nIDxULCBVPigzKTtcblxuLy8gVGVzdCBpbnZva2luZyBhIGNvbnN0cnVjdG9yIHdpdGggZXhwbGljaXQgdHlwZSBhcmd1bWVudHNcbm5ldyBFdmVudDxudW1iZXI+KCk7XG5cbi8vIFRlc3QgdHlwZSB1bmlvbiBhbmQgaW50ZXJzZWN0aW9uIHN5bnRheCB3aXRoIGxlYWRpbmcgXCJvcGVyYXRvclwiXG52YXIgdW5pb246IHwgVCB8IFU7XG52YXIgaW50ZXJzZWN0aW9uOiAmIFQgJiBVO1xuXG4vLyBUZXN0IGdlbmVyaWMgYXN5bmMgYXJyb3cgZnVuY2lvblxuY29uc3QgZiA9IGFzeW5jIDxUPigpOiBUID0+IHt9O1xuXG4vLyBDb21tZW50IHR5cGUgYW5ub3RhdGlvbnMgYXJlIHByZXNlcnZlZFxudmFyIFggLyo6IHtcbiAgdmVyc2lvbjogc3RyaW5nLFxufSAqLyA9IHsgdmVyc2lvbjogJzQyJ307XG5cbmZ1bmN0aW9uIG1ldGhvZChwYXJhbSAvKjogc3RyaW5nICovKSAvKjogbnVtYmVyICovIHtcbiAgLy8gLi4uXG59XG5cbi8vIENvbW1lbnQgdHlwZSBpbmNsdWRlcyBhcmUgZW1wdGllZCBvdXRcbmNsYXNzIE15Q2xhc3Mge1xuICAvKjo6IHByb3A6IHN0cmluZzsgKi9cbn1cblxuLy8gSW5mZXJyZWQgcHJlZGljYXRlXG5mdW5jdGlvbiB0ZXN0aXQoYXJnOiBtaXhlZCk6IGJvb2xlYW4gJWNoZWNrcyB7XG4gIHJldHVybiAhIWFyZztcbn1cblxuLy8gVGVzdCBmdW5jdGlvbiB3aXRoIGRlZmF1bHQgdHlwZSBwYXJhbWV0ZXJcbmZ1bmN0aW9uIGY8VCwgUyA9IFQ+KCkge31cbiJdfQ==
