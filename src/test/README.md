test 방법론으로 

stub과 mock이 있다.

stub은 상태검증
mock은 행위검증이다.

예를들어 상태검증은 결과가 출력되었는지 체크하고
```javascript
  const stub = jest.fb();
  const result = stub.returnValue('hello');
  expect(result).tobe('hello');
```

행위검증은 메서드가 호출되었는지를 검사하는 식이다.
```javascript
  const stub = jest.fb();
  const result = stub.returnValue('hello');
  stub();
  expect(stub).toBeCalledTimes(1);
```