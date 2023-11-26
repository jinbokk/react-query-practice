# udemy-REACT-QUERY

Code to support the Udemy course [React Query: Server State Management in React](https://www.udemy.com/course/learn-react-query/?couponCode=REACT-QUERY-GITHUB)

---

## 공부 1일차
- (Client - React Query - Server) 와 같이 React Query는 클라이언트와 서버의 중간에서 상태관리를 한다. (서버데이터 캐시? 공식문서 참고하여 블로그로 정리할 것)
- 기존의 Fetch나 Axios 등을 사용해서 서버에 다이렉트로 접근하는 방식과 차이점이 있다.
- isFetching 과 isLoading이 헷갈릴 수 있지만, isFetching이 더 큰 개념이고 그 안에 isLoading이 속한다고 보면 된다. (더 자세히 공부해서 블로그로 정리할 것)
- react query는 기본적으로 '3번'의 쿼리요청을 시도한 뒤, 실패했을때 isError를 발생시킨다. 
- react query는 hook 기반의 로직들로 이루어져 있어서, isLoading, isError 등의 이벤트가 발생하면 자연스럽게 리렌더링을 유발하게 해준다.
- Create React App은 npm run build 커맨드 입력시에만 (빌드시에만) NODE_ENV 를 production으로 설정한다.
- React Query 개발자 도구는 기본적으로 production 번들에는 포함되지 않는다.
- React Query 개발자 도구는 빌드시에 더 나은 패키지 관리를 위해 "react-query" 가 아닌 "react-query/devtools" 경로(하위패키지)에서 import 한다
- 기본적으로, 성공적인 data fetching 후의 data 들은 곧바로 stale(만료) 상태가 된다. (not fresh)
- Stale Data (만료된 데이터) 란, 오래된 식빵에 비유할 수 있다.
- Data Re-fetching은 stale data를 대상으로만 실행된다. (윈도우 포커스, 컴포넌트 마운트/언마운트 등 그 외에도 다양한 트리거들이 있긴하다)
- staleTime이란 데이터를 허용하는 "최대 나이" 라고 생각하면 된다. 즉, 데이터가 만료되기까지의 최대 시간을 정하는 것이다. (useQuery의 3번째 전달인자에 해당하는 option에서 적용하면 된다. 기본 staleTime은 0ms)
- staleTime vs cacheTime ? (관련 내용 더 공부하여 블로그 정리 필요)
- staleTime은 re-fetching을 위한 것이고, cacheTime은 나중에 재사용될 가능성이 있는 데이터를 위한 것이다.
- 만약 활성화된 useQuery가 없다면, query는 "cold storage" 라는 곳으로 이동한다.
- cache data는 cacheTime 이후에 만료가 되는데, 기본값은 5분이며 이때 cacheTime의 시작점은 제일 최근에 활성화된 useQuery의 시간을 기준으로 한다
- cache가 만료되고 나면, 데이터는 가비지 콜랙티드?가 된다
- cache는 data fecthing 동안 유저에게 표시할 백업 데이터이다. (유저의 입장에서 빈 화면을 보는 것 보다는 몇 분 전의 데이터라도 일단 보여주는 것이 좋다는 관점에서 말하는 것이고, 만약 주식 등과 같이 최신화된 데이터가 아니면 위험할 경우에는 빈화면이 더 낫긴 하다)