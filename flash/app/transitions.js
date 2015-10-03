export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('dashboard'),
    // this.use('toUp'),
    // this.reverse('toDown')
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
